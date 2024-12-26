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
        var site = this.Configuration?.GetSection("AppSettings")?["Site"];
        if (site == "CORVALLIS")
        {
            this.ConnectionString = this.Configuration.GetConnectionString("DbContext_CRVLS_Encrypted");
        }

        if (site == "PUERTO RICO")
        {
            this.ConnectionString = this.Configuration.GetConnectionString("DbContext_PR_Encrypted");
        }

        if (site == "SINGAPORE")
        {
            this.ConnectionString = this.Configuration.GetConnectionString("DbContext_SINGAPORE_Encrypted");
        }

        if (site == "ISIMO")
        {
            this.ConnectionString = this.Configuration.GetConnectionString("DbContext_IS_Encrypted");
        }

        var connBuilder = new System.Data.SqlClient.SqlConnectionStringBuilder(ConnectionString);
        var decryptconn = EncryptDecrypt.Decrypt(connBuilder.Password);
        connBuilder.Password = decryptconn;
        this.ConnectionString = connBuilder.ConnectionString;
    }

    
    public void ConfigureServices(IServiceCollection services)
    {
        // Register DbContext
        services.AddDbContext<INKDBPRContext>(options => options.UseSqlServer(ConnectionString));

     
        //services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DbContext_SINGAPORE_Encrypted")));
        //services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ApplicationDbContext")));
        //services.AddDbContext<InkDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ApplicationDbContext")));
        services.AddDbContext<InkDbContext>(options => options.UseSqlServer(this.ConnectionString));

        var configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
        var requiredHeaders = new List<string> { "TechId", "ProdTypeId", "FamilyId", "DetailId" };
        services.AddScoped<IHeaderValidator>(_ => new HeaderValidator(requiredHeaders));


        // Register TechnologyService
        services.AddScoped<ITechnologyService, TechnologyService>();
        services.AddScoped<ITechnologyRepository, TechnologyRepository>();

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
        services.AddScoped<ITechnologyService, TechnologyService>();
    
    }

    public void ConfigureAppRepositories(IServiceCollection services)
    {
        services.AddScoped<ITechnologyRepository, TechnologyRepository>();
        services.AddScoped<IMaterialTypeRepository, MaterialTypeRepository>();
     
    }

}
