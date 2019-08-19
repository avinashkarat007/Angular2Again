using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebAPIService.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (EmployeesDBEntities entities = new EmployeesDBEntities())
            {
                return entities.Employees.Take(20).ToList();
            }
        }

        public Employee Get(int id)
        {
            using (EmployeesDBEntities entities = new EmployeesDBEntities())
            {
                return entities.Employees.FirstOrDefault(e => e.ID == id);
            }
        }
    }
}
