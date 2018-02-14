using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAngPracApp.Models
{
    public class BulletJournalContext : DbContext
    {
        public BulletJournalContext(DbContextOptions<BulletJournalContext> options)
            : base(options)
        {

        }

        public DbSet<DailyLogModel> DailyLogModels { get; set; }
    }
}