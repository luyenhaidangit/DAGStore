﻿namespace DAGStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateTableCategory2 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Category", new[] { "Alias" });
            AddColumn("dbo.Category", "MetaKeywords", c => c.String(maxLength: 500));
            AddColumn("dbo.Category", "MetaDescription", c => c.String(maxLength: 4000));
            AddColumn("dbo.Category", "MetaTitle", c => c.String(maxLength: 500));
            DropColumn("dbo.Category", "Deleted");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Category", "Deleted", c => c.Boolean(nullable: false));
            DropColumn("dbo.Category", "MetaTitle");
            DropColumn("dbo.Category", "MetaDescription");
            DropColumn("dbo.Category", "MetaKeywords");
            CreateIndex("dbo.Category", "Alias", unique: true);
        }
    }
}
