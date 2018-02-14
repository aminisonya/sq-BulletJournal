using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAngPracApp.Models
{
    public class DailyLogModel
    {
        public int Id { get; set; }

        public string Entry { get; set; }

        public string EntryType { get; set; }

        public DateTime Date { get; set; }
    }
}