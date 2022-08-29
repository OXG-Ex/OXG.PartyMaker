using OXG.PartyMaker.Models.Auth;
using System.Security.Claims;
using System.Threading.Tasks;

namespace OXG.PartyMaker.Interfaces
{
    public interface IAuthService
    {
        public Task<IdentityUser> GetIdentity(string username, string password);

        public Task<IdentityUser> CreateIdentity(string email, string password, string userName);

        public string CreateJWTForIdentity(IdentityUser identity);

        public ClaimsIdentity GetClaimsForIdentity(IdentityUser identity);
    }
}