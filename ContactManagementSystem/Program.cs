using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using SampleManagementService.DataAccess;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore;
using SampleManagementService.DataAccess;
using Newtonsoft.Json.Serialization;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.AddDbContext<InkDbContext>(options =>
//    options.UseSqlServer(builder.Configuration.GetConnectionString("DbContext_SINGAPORE_Encrypted")));
builder.Services.AddCors();
builder.Services.AddControllers();

//JSON SERIALIZER
builder.Services.AddControllers().AddNewtonsoftJson(options =>
options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(options =>
options.SerializerSettings.ContractResolver = new DefaultContractResolver());

var app = builder.Build();
app.UseAuthorization();
//enable cors
app.UseCors(builder =>
            builder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod()
        );
app.UseCors("CorsPolicy");
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();



app.MapControllers();


// Create an instance of the WebHostBuilder
var webHostBuilder = WebHost.CreateDefaultBuilder(args);

// Include the following line to use Startup.cs for configuration.
webHostBuilder.UseStartup<Startup>();

// Build the WebHost and run
webHostBuilder.Build().Run();
