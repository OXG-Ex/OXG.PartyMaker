using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OXG.PartyMaker.Interfaces;
using OXG.PartyMaker.Models;
using OXG.PartyMaker.Models.Auth;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace OXG.PartyMaker.Services
{
    public class AuthService : IAuthService
    {
        private readonly DataContext _dbContext;
        public AuthService(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IdentityUser> CreateIdentity(string email, string password, string userName)
        {
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

            return result.Entity;
        }

        public string CreateJWTForIdentity(IdentityUser identity)
        {
            var claimsIdentity = GetClaimsForIdentity(identity);
            var now = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
            issuer: AuthTokenOptions.ISSUER,
            audience: AuthTokenOptions.AUDIENCE,
            notBefore: now,
            claims: claimsIdentity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthTokenOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthTokenOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

        public ClaimsIdentity GetClaimsForIdentity(IdentityUser identity)
        {
            var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, identity.Email),
                  //  new Claim(ClaimsIdentity.DefaultRoleClaimType, identity.Role)
                };
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }

        public async Task<IdentityUser> GetIdentity(string username, string password)
        {
            return await _dbContext.IdentityUsers.Include(x=>x.User).FirstOrDefaultAsync(x => x.Email == username && x.PasswordHash == password.GetHashCode().ToString());
        }

    }
}
