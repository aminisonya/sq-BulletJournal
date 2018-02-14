using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreAngPracApp.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreAngPracApp.Controllers
{
    [Route("api/[controller]")]
    public class DailyLogController : Controller
    {
        private readonly BulletJournalContext _context;
        
        public DailyLogController(BulletJournalContext context)
        {
            _context = context;

            if (_context.DailyLogModels.Count() == 0)
            {
                _context.DailyLogModels.Add(new DailyLogModel { Entry = "Eat a healthy breakfast" });
                _context.SaveChanges();
            }
        }

        [HttpGet("getall")]
        public IEnumerable<DailyLogModel> GetAll()
        {
            return _context.DailyLogModels.ToList();
        }
        
        [HttpGet("get/{id}", Name = "GetDailyEntry")]
        public IActionResult GetEntryById(int id)
        {
            var item = _context.DailyLogModels.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
        
        [HttpPost("create")]
        public IActionResult Create([FromBody] DailyLogModel dailyentry)
        {
            if (dailyentry == null)
            {
                return BadRequest();
            }

            _context.DailyLogModels.Add(dailyentry);
            _context.SaveChanges();

            return CreatedAtRoute("GetDailyEntry", new { id = dailyentry.Id }, dailyentry);
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, [FromBody] DailyLogModel dailyentry)
        {
            if (dailyentry == null || dailyentry.Id != id)
            {
                return BadRequest();
            }

            var item = _context.DailyLogModels.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                return NotFound();
            }

            item.Entry = dailyentry.Entry;
            item.EntryType = dailyentry.EntryType;
            item.Date = dailyentry.Date;

            _context.DailyLogModels.Update(item);
            _context.SaveChanges();
            return new NoContentResult();
        }

        [HttpDelete("remove/{id}")]
        public IActionResult Delete(int id)
        {
            var dailyentry = _context.DailyLogModels.FirstOrDefault(i => i.Id == id);
            if (dailyentry == null)
            {
                return NotFound();
            }

            _context.DailyLogModels.Remove(dailyentry);
            _context.SaveChanges();
            return new NoContentResult();
        }
    }
}