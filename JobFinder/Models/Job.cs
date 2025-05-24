namespace JobFinder.Models
{
    public class Job
    {
        public int JobID { get; set; }
        public required string JobName { get; set; }
        public required string JobDescription { get; set; }
        public required string CompanyInformation { get; set; }
        public required string ApplicationInstructions { get; set; }
        public  Employer? Employer {  get; set; }
        public Category Category { get; set; }
        public Hours Hours { get; set; }
        public Type Type { get; set; }
        public DateOnly JobDate { get; set; }
    }
}
