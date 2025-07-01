Title: User that does not exist in the db can be created
Type: Full Flow
Business Layer Action: user.createAs('standard_user')
Pages Involved: signUpPage
Priority: High
Ownership: Vali
Test Tags: @createUser
Status: ✅ **Implemented and passing**

Title: User that exists in the db can't be created
Type: Full Flow
Business Layer Action: user.createAs('standard_user')
Pages Involved: signUpPage
Priority: High
Ownership: Vali
Status: 🟡 **Not yet implemented**

Title: User can log in with valid credentials
Type: Full Flow
Business Layer Action: user.logInAs('standard_user')
Pages Involved: LoginPage
Priority: High
Ownership: Vali
Test Tags: @login
Status: ✅ **Implemented and passing**

Title: User can't log in with invalid credentials
Type: Full Flow
Business Layer Action: user.logInAs('standard_user')
Pages Involved: LoginPage
Priority: High
Ownership: Vali
Test Tags: @login
Status: 🟡 **In progress or not yet implemented**

Title: User can logout
Type: Full Flow
Business Layer Action: user.logOutAs('standard_user')
Pages Involved: MainPage
Priority: High
Ownership: Vali
Test Tags: @MainPage
Status: 🟡 **Planned / Not yet implemented**