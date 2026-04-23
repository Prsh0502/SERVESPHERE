## ServeSphere
Smart Volunteer–Organization Event Management Platform

A full-stack system designed to bridge the gap between volunteers and organizations through efficient event management, scalable database design, and seamless user interaction.

## Project Overview
ServeSphere is built to solve a real-world coordination problem:

Organizations struggle to manage events and volunteers efficiently, while volunteers lack a centralized platform to discover and enroll in opportunities.
This platform provides a structured, scalable solution using modern web technologies and relational database design.

## Key Highlights 
🔗 Real-world DBMS Design with normalized schema and relationships

⚡ Full-stack integration (Frontend + Backend + Database)

🔄 Many-to-Many relationship handling using junction tables

📊 Supports advanced SQL queries (aggregation, filtering, sorting)

🧩 Modular backend using REST APIs

💡 Built with scalability and extensibility in mind

## System Architecture
Frontend (React / HTML-CSS)
        ↓
Flask REST API (Backend)
        ↓
PostgreSQL Database (pgAdmin)

 Frontend: Handles UI/UX and user interaction
 
 Backend: Processes requests and connects logic with database
 
 Database: Stores structured relational data

## Database Design 

# Entities & Relationships:
🏢 Organization → Event (1 : Many)

🙋 Volunteer ↔ Event (Many : Many)
# Why this matters:
Efficient data handling

Avoids redundancy (Normalization)

Scales for large datasets

## Core Features
# Organization Module
Register and manage organizations

Unique email and phone validation
# Event Module
Create and manage events

Linked to organizations via foreign key
🙋 Volunteer Module
Volunteer registration system

Unique identity enforcement
🔗 Enrollment System
Volunteers can enroll in multiple events

Tracks participation with timestamp
