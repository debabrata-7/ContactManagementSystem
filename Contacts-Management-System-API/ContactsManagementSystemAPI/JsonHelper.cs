using System.Text.Json;

namespace ContactsManagementSystemAPI
{
    public class JsonHelper
    {
        private readonly string _filePath;

        public JsonHelper(IWebHostEnvironment environment)
        {
            _filePath = Path.Combine(environment.ContentRootPath, "Contacts.json");

            if (!File.Exists(_filePath))
            {
                File.WriteAllText(_filePath, "[]");
            }
        }

        public List<ContactModel> GetContacts()
        {
            var json = File.ReadAllText(_filePath);
            return JsonSerializer.Deserialize<List<ContactModel>>(json) ?? new List<ContactModel>();
        }

        public void SaveContacts(List<ContactModel> contacts)
        {
            var json = JsonSerializer.Serialize(contacts);
            File.WriteAllText(_filePath, json);
        }
    }
}
