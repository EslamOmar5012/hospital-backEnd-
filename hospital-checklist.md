# Hospital Management System -- Specifications & Checklists

## 1. Use Cases

### 1.1 Wards

-   [ ] UC-W1: Create new ward
-   [ ] UC-W2: Assign a supervisor (nurse) to a ward
-   [ ] UC-W3: View list of wards
-   [ ] UC-W4: View ward details (supervisor, nurses, patients)
-   [ ] UC-W5: Edit ward info
-   [ ] UC-W6: Delete ward

### 1.2 Consultants

-   [ ] UC-C1: Add new consultant
-   [ ] UC-C2: View consultant list
-   [ ] UC-C3: View consultant details
-   [ ] UC-C4: Assign consultant to patient
-   [ ] UC-C5: Delete consultant

### 1.3 Nurses

-   [ ] UC-N1: Register nurse
-   [ ] UC-N2: View nurse list
-   [ ] UC-N3: View nurse profile
-   [ ] UC-N4: Assign nurse to ward
-   [ ] UC-N5: Delete nurse

### 1.4 Patients

-   [ ] UC-P1: Register patient
-   [ ] UC-P2: View patient list
-   [ ] UC-P3: View patient full profile
-   [ ] UC-P4: Assign/change ward
-   [ ] UC-P5: Assign/change consultant
-   [ ] UC-P6: Delete patient

### 1.5 Examinations

-   [ ] UC-E1: Consultant examines patient
-   [ ] UC-E2: View patient examination history

### 1.6 Drugs & Brand Names

-   [ ] UC-D1: Add drug
-   [ ] UC-D2: Add brand name to drug
-   [ ] UC-D3: View drug list + brand names
-   [ ] UC-D4: View drug details

### 1.7 Drug Records (Administration)

-   [ ] UC-DR1: Nurse gives drug to patient
-   [ ] UC-DR2: View drug records of patient
-   [ ] UC-DR3: View full drug administration log

## 2. Front-End Pages Checklist

### Dashboard

-   [ ] Statistics cards
-   [ ] Quick navigation links

### Wards

-   [ ] /wards -- list
-   [ ] /wards/create -- form
-   [ ] /wards/:id -- details
-   [ ] /wards/:id/edit -- form

### Consultants

-   [ ] /consultants
-   [ ] /consultants/create
-   [ ] /consultants/:id
-   [ ] /consultants/:id/edit

### Nurses

-   [ ] /nurses
-   [ ] /nurses/create
-   [ ] /nurses/:id
-   [ ] /nurses/:id/edit

### Patients

-   [ ] /patients
-   [ ] /patients/create
-   [ ] /patients/:id
-   [ ] /patients/:id/edit
-   [ ] /patients/:id/give-drug
-   [ ] /patients/:id/examinations

### Drugs

-   [ ] /drugs
-   [ ] /drugs/create
-   [ ] /drugs/:id
-   [ ] /drugs/:id/add-brand

### Drug Records

-   [ ] /drug-records -- log view

## 3. Back-End API Checklist

### Wards

GET /api/wards\
GET /api/wards/:id\
POST /api/wards\
PUT /api/wards/:id\
DELETE /api/wards/:id

### Consultants

GET /api/consultants\
GET /api/consultants/:id\
POST /api/consultants\
PUT /api/consultants/:id\
DELETE /api/consultants/:id

### Nurses

GET /api/nurses\
GET /api/nurses/:id\
POST /api/nurses\
PUT /api/nurses/:id\
DELETE /api/nurses/:id

### Patients

GET /api/patients\
GET /api/patients/:id\
POST /api/patients\
PUT /api/patients/:id\
DELETE /api/patients/:id

### Patient Assignments

PUT /api/patients/:id/assign-ward\
PUT /api/patients/:id/assign-consultant

### Drugs

GET /api/drugs\
GET /api/drugs/:id\
POST /api/drugs\
PUT /api/drugs/:id\
DELETE /api/drugs/:id

### Brand Names

GET /api/drugs/:id/brands\
POST /api/drugs/:id/brands

### Drug Records

GET /api/drug-records\
GET /api/patients/:id/drug-records\
POST /api/drug-records

### Examinations

GET /api/examinations\
GET /api/patients/:id/examinations\
POST /api/examinations
