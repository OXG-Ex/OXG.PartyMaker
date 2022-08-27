using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System;
using OXG.PartyMaker.Models.Auth;
using OXG.PartyMaker.Models;
using System.Threading.Tasks;

namespace OXG.PartyMaker.Controllers
{
    public class AccountController : Controller
    {
        private readonly DataContext _dbContext;
        public AccountController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("/register")]
        public async Task<IActionResult> Register(string email, string password, string userName)
        {
            //TODO: validation
            var identity = new IdentityUser()
            {
                Email = email,
                PasswordHash = password.GetHashCode().ToString(),
                CreationTimestamp = DateTime.UtcNow,
                User = new User()
                {
                    Name = userName,
                    Photo = ""
                }

            };
            var result = await _dbContext.IdentityUsers.AddAsync(identity);
            await _dbContext.SaveChangesAsync();
            return Json(result.Entity);
        }

        [HttpPost("/token")]
        public IActionResult Token(string username, string password)
        {
            var identity = GetIdentity(username, password);
            if (identity == null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            var now = DateTime.UtcNow;
            //SN: create jwt-token
            var jwt = new JwtSecurityToken(
            issuer: AuthTokenOptions.ISSUER,
            audience: AuthTokenOptions.AUDIENCE,
            notBefore: now,
            claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthTokenOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthTokenOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                username = identity.Name
            };
            return Json(response);
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            var identity = _dbContext.IdentityUsers.FirstOrDefault(x => x.Email == username && x.PasswordHash == password.GetHashCode().ToString());
            if (identity != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, identity.Email),
                  //  new Claim(ClaimsIdentity.DefaultRoleClaimType, person.Role)
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            return null;
        }
    }
}
