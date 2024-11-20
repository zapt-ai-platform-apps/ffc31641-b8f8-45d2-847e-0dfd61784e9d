# Serverse

Serverse is an AI-driven CRM platform designed for B2B businesses to streamline sales processes and enhance customer relationship management. The platform integrates advanced AI algorithms to automate lead scoring, prioritize prospects, and reduce manual tasks, allowing sales teams to focus on closing deals and building stronger customer relationships.

## User Journey

### 1. User Authentication
- **Step 1:** Open the app to the login page.
- **Step 2:** Click on "Sign in with ZAPT" to authenticate via Supabase Auth UI.
- **Step 3:** Upon successful login, the user is redirected to the dashboard.

### 2. Dashboard Overview
- **Step 1:** View real-time analytics on sales performance and customer behavior.
- **Step 2:** Access visualized customer data insights through charts and graphs.
- **Step 3:** Navigate through different sections using the sidebar navigation.

### 3. Lead Management
- **Step 1:** Click on "Leads" in the sidebar to view the leads list.
- **Step 2:** See leads automatically scored and prioritized by AI algorithms.
- **Step 3:** Select a lead to view detailed information and interaction history.

### 4. Automated Communication
- **Step 1:** Use the "Communications" section to view automated emails and chatbot interactions.
- **Step 2:** Personalize outreach messages using AI-suggested content.
- **Step 3:** Schedule follow-up communications, which are automated by the system.

### 5. Sales Pipeline Tracking
- **Step 1:** Navigate to the "Sales Pipeline" to see the status of ongoing deals.
- **Step 2:** Drag and drop deals between stages to update their status.
- **Step 3:** View AI-driven insights on which deals to prioritize.

### 6. Customer Satisfaction Monitoring
- **Step 1:** Access the "Customer Satisfaction" section to view survey results.
- **Step 2:** Analyze sentiment analysis provided by AI predictions.
- **Step 3:** Use insights to improve customer interactions and services.

### 7. Predictive Analytics
- **Step 1:** Explore the "Predictive Analytics" dashboard.
- **Step 2:** Review AI-generated forecasts on customer needs and market trends.
- **Step 3:** Make data-driven decisions based on the predictive insights.

### 8. Automation Settings
- **Step 1:** Go to "Settings" and select "Automation."
- **Step 2:** Customize workflows and automation rules.
- **Step 3:** Enable or disable multi-channel communication options.

### 9. Logout
- **Step 1:** Click on the profile icon in the top-right corner.
- **Step 2:** Select "Sign Out" to log out of the application.

## External APIs Used

- **ZAPT AI Backend:** Utilizes the `createEvent` function to send events for AI processing, including lead scoring, predictive analytics, and automated communication content generation.
- **Supabase Auth:** Manages user authentication with social login providers like Google, Facebook, and Apple.
