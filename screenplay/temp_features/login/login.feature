Feature: User is able to navigate through the application

  In order to focus on things that matter
  Engineer would like to navigate through the application
  to validate it is working as expected

@login
Scenario: Succesful login
Given that Engineer opens the Login page
When he enters a great credentials
Then he should be warned about the invalid credential

@createAnalysis
Scenario: Succesful analysis creation
Given that Engineer opens the creation analysis form
When he enters the analysis information
Then he should be create the analysis

@createMovements
Scenario: Succesful movement creation
Given that Engineer opens the creation movement form
When he enters the movement information
Then he should be create the movement

@editMovement
Scenario: Succesful movement edition
Given that Engineer opens the edit movement form
When he changes the movement information
Then he should save the movement with the new information

@deleteMovement
Scenario: Succesful movement delete
Given that Engineer is in the movements page
When he delete the movement
Then he should have one less movement

@proccessingAnalysis
Scenario: Succesful analysis proccessing
Given that Engineer is in the movements page
When he proccess the anaysis
Then he should have the analysis in the in-progress status

@succesfulCancellation
Scenario: Succesful cancellation of analysis
Given that Engineer opens the analysis query page
When he cancels one analsys in the in-proccess status
Then he should cancel the analysis

@getAnalysis
Scenario: Succesful getting analysis
Given that Engineer opens the analysis query page
When he get a analysis by id
Then he should get the analysis searched

@getAllAnalysis
Scenario: Succesful getting all analysis
Given that Engineer opens the analysis query page
When he get all analysis
Then he should get all the analysis in the system

@getAllTheMovementsByAnalysisId
Scenario: Succesful getting all movements by analysis Id
Given that Engineer has a analysis with movements
When he search all the movement by the analysis id
Then he should see all the movements of the analsys

@checkMovementOfAnalysis
Scenario: Succesful checking of analysis
Given that Engineer has an analsys with movements
When he want to check by the movement name
Then he could know if the movements belongs to the analsys

@getAnalysisProgress
Scenario: Succesful getting analysis progress
Given that Engineer has an analsys
When he want to know the analysis progress
Then he should see by Id analsys

@returnCameraDirectory
Scenario: Succesful return camera directory information
Given that Engineer has a directory with videos
When he asks by the camera directory information
Then he should receive the camera directory information

#@findDirectories
#Scenario: Succesful return a list of directories
#Given that Engineer has directories
#When he asks by the directories information
#Then he should receive the directories information

#@getASnapshot
#Scenario: Succesful getting snapshot
#Given that Engineer has videos
#When he asks by snapshot
#Then he should receive a video image