-- Creating the Database
CREATE DATABASE ashesi_iconnect;

-- Connect to the Database
\c ashesi_iconnect;

-- Drop existing tables (if needed)
-- DROP TABLE IF EXISTS users, categories, issues, comments, attachments, notifications;

-- Creating Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'administrator', 'developer')),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    unique_id VARCHAR(50) NOT NULL,
    language VARCHAR(20) CHECK (language IN ('english', 'french')),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating Categories Table
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating Issues Table
CREATE TABLE issues (
    issue_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories(category_id) ON DELETE SET NULL,
    description TEXT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('open', 'in-progress', 'closed')),
    priority VARCHAR(20) NOT NULL CHECK (priority IN ('high', 'medium', 'low')),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating Comments Table
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    issue_id INTEGER REFERENCES issues(issue_id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(user_id) ON DELETE SET NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating Attachments Table
CREATE TABLE attachments (
    attachment_id SERIAL PRIMARY KEY,
    issue_id INTEGER REFERENCES issues(issue_id) ON DELETE CASCADE,
    attachment_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating Notifications Table
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    issue_id INTEGER REFERENCES issues(issue_id) ON DELETE SET NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('unread', 'read')),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for Performance Optimization
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_issue_user ON issues(user_id);
CREATE INDEX idx_issue_category ON issues(category_id);
CREATE INDEX idx_comment_issue ON comments(issue_id);
CREATE INDEX idx_attachment_issue ON attachments(issue_id);
CREATE INDEX idx_notification_user ON notifications(user_id);
CREATE INDEX idx_notification_issue ON notifications(issue_id);

-- Additional Optimizations (e.g., Analyze)
ANALYZE;

-- Vacuum and Analyze for Optimization
VACUUM ANALYZE;
