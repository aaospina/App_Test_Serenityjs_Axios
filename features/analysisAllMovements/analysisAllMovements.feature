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
Scenario Outline: Succesful analysis creation
Given that Engineer opens the creation analysis form
When he enters the analysis information
And user enters <aforo> and <directory>
Then he should be create the analysis
Examples:
| aforo | directory |
| aforo1 | directory1 |
#| file:/home/abraham/Documents/allanalysis.csv |

#{'datafile':'/home/abraham/Documents/allanalysis.csv'}
#| aforo | directory |
#| Aforo1 | Directory1 |
#| Aforo2 | Directory2 |

#@createAnalysis
#Scenario: Succesful analysis creation
#Given that Engineer opens the creation analysis form
#When he enters the analysis information
#And user enters data to create the analysis
#| aforo_1 | directory@153 |
#Then he should be create the analysis



@createMovements
Scenario: Succesful movement creation
Given that Engineer opens the creation movement form
When he enters the movement information
Then he should be create the movement

#@proccessingAnalysis
#Scenario: Succesful analysis proccessing
#Given that Engineer is in the movements page
#When he proccess the anaysis
#Then he should have the analysis in the in-progress status