using Microsoft.AspNetCore.Mvc;

namespace ContactsManagementSystemAPI
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly JsonHelper _jsonHelper;

        public ContactsController(JsonHelper jsonHelper)
        {
            _jsonHelper = jsonHelper;
        }

        [HttpGet]
        public IActionResult GetContacts()
        {
            return Ok(_jsonHelper.GetContacts());
        }

        [HttpPost]
        public IActionResult AddContact([FromBody] ContactModel contact)
        {
            var contacts = _jsonHelper.GetContacts();
            contact.Id = contacts.Any() ? contacts.Max(c => c.Id) + 1 : 1;
            contacts.Add(contact);
            _jsonHelper.SaveContacts(contacts);
            return CreatedAtAction(nameof(GetContacts), new { id = contact.Id }, contact);
        }

        [HttpPost("{id}")]
        public IActionResult UpdateContact(int id, [FromBody] ContactModel updatedContact)
        {
            var contacts = _jsonHelper.GetContacts();
            var contact = contacts.FirstOrDefault(c => c.Id == id);

            if (contact == null) return NotFound();

            contact.FirstName = updatedContact.FirstName;
            contact.LastName = updatedContact.LastName;
            contact.Email = updatedContact.Email;

            _jsonHelper.SaveContacts(contacts);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            var contacts = _jsonHelper.GetContacts();
            var contact = contacts.FirstOrDefault(c => c.Id == id);

            if (contact == null) return NotFound();

            contacts.Remove(contact);
            _jsonHelper.SaveContacts(contacts);
            return NoContent();
        }
    }
}
