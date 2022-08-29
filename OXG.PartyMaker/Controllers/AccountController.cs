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
using OXG.PartyMaker.Models.DTO;
using OXG.PartyMaker.Interfaces;

namespace OXG.PartyMaker.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AccountController : ControllerBase
    {
        private readonly DataContext _dbContext;
        private readonly IAuthService _authService;
        public AccountController(DataContext dbContext, IAuthService authService)
        {
            _dbContext = dbContext;
            _authService = authService;
        }

        [HttpPost]
        public async Task<IActionResult> SignUp([FromBody] SignUpDTO SignUpDTO)
        {
            //TODO: validation
            var identity = await _authService.CreateIdentity(SignUpDTO.Email, SignUpDTO.Password, SignUpDTO.UserName);
            var token = _authService.CreateJWTForIdentity(identity);

            var response = new
            {
                access_token = token,
                username = identity.User.Name,
            };
            return new JsonResult(response);
        }

        [HttpPost]
        public async Task<IActionResult> GetToken([FromBody] GetTokenDTO tokenDTO)
        {
            //var v = new { access_token = "wqerqwer", username = "Hello" };

            //return new JsonResult(v);

            var identity = await _authService.GetIdentity(tokenDTO.UserEmail, tokenDTO.UserPassword);

            var token = _authService.CreateJWTForIdentity(identity);

            var response = new
            {
                access_token = token,
                username = identity.User.Name,
            };
            return new JsonResult(response);
        }
    }
}
