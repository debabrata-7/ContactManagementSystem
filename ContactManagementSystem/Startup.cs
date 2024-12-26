using Microsoft.EntityFrameworkCore;
using SampleManagementService.DataAccess;
using SampleManagementService.Services;
using SampleManagementService.Services.Interfaces;
using SampleManagementService.DataAccess.Repositories;
using SampleManagementService.DataAccess.Repositories.Interfaces;
using SampleManagementService.Helpers;
using SampleManagementService.Validators.Interface;
using SampleManagementService.Validators;
using System.Data.SqlClient;

public class Startup
{
    public IConfiguration Configuration { get; }

    public string ConnectionString { get; set; }
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
        
    }

    
    public void ConfigureServices(IServiceCollection services)
    {
        var configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
        
        services.AddScoped<IHeaderValidator>(_ => new HeaderValidator(requiredHeaders));
        // Add other services...
        services.AddSingleton<IConfiguration>(this.Configuration);
        services.AddControllers();
        ConfigureAppServices(services);
        ConfigureAppRepositories(services);
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Error");
            app.UseHsts();
        }
      //  app.UseLogging();  // Configure logging here

        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseCookiePolicy();

        // Add this line to enable routing middleware
        app.UseRouting();

        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.UseCors("CorsPolicy");
        app.UseCors(
        options => options.AllowAnyOrigin().AllowAnyMethod()
    );
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }

    public void ConfigureAppServices(IServiceCollection services)
    {
    
    }

    public void ConfigureAppRepositories(IServiceCollection services)
    {
    
     
    }

}
