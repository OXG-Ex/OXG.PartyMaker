using System;
using System.Collections.Generic;

namespace OXG.PartyMaker.Models
{
    public class Event
    {
        public Guid Id { get; set; }

        public IList<User> Members { get; set; }
    }
}
