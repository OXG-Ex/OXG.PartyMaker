using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace OXG.PartyMaker.Models.Auth
{
    public class AuthTokenOptions
    {
        public const string ISSUER = "OXG.AuthServer";
        public const string AUDIENCE = "OXG.AuthClient"; 
        const string KEY = "OXG_ex!2177KeY";  
        public const int LIFETIME = 1; // TTL = 1 min
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
