using System;

namespace OXG.PartyMaker.Models.Auth
{
    public class IdentityUser
    {
        public Guid Id { get; set; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public DateTime CreationTimestamp { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
