﻿using DAGStore.Model.Models;
using System.Data.Entity;

namespace DAGStore.Data
{
    public class DAGStoreDbContext : DbContext
    {
        /// <summary>
        /// Using packet manager console
        /// enable-migrations: create config migrations
        /// add-migrations: add changes database
        /// update-database: render code to sql and run
        /// </summary>

        public DAGStoreDbContext() : base("Data Source=LAPTOP-3KE0ADA0;Initial Catalog=DAGStore;Integrated Security=True")
        {
        }

        public DbSet<Supplier> Supplier { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Brand> Brand { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Discount> Discount { get; set; }
        public DbSet<ProductDiscount> ProductDiscount { get; set; }
        public DbSet<MenuRecord> MenuRecord { get; set; }
        public DbSet<MenuItemRecord> MenuItemRecord { get; set; }
        
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }

        public virtual void Commit()
        {
            base.SaveChanges();
        }

        public static DAGStoreDbContext Create()
        {
            return new DAGStoreDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        
        }
    }
}