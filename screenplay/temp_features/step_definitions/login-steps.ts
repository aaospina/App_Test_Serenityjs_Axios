import { Post } from "../../../screenplay/interactions/post";
import { hasResponseCode } from "../../../screenplay/questions/response_message";
import { See } from "@serenity-js/core/lib/screenplay";
import { LastResponse } from "../../../screenplay/questions";
import { AuthenticateWith } from "../../../screenplay/interactions/authenticate_with";
import { Put, Delete, Patch, Get } from "../../../screenplay/interactions";
import { Head } from "../../../screenplay/interactions/head";


export = function loginSteps() {

    const analysis = '1';
    const movemet = '2';

    //@login
    this.Given(/^that Engineer opens the Login page$/, function () {
        return this.stage.theActorCalled('Engineer').attemptsTo(
        )
    });

    this.When(/^he enters a great credentials$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AuthenticateWith.item({ email:'a.ospina+client@transportsystems.co', password:'Ts12345*' }).on('/v1/login')
        )
    });

    this.Then(/^he should be warned about the invalid credential$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
        See.if(LastResponse(),hasResponseCode(200))
        )
    });

    //@createAnalysis
    this.Given(/^that Engineer opens the creation analysis form$/, function () {
        
    });

    this.When(/^he enters the analysis information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Post.item({ directory: "Video_1_Minuto", type: "SIMPLE_VOLUMES", name: "Aforito" }).on('/v1/analyses')
        )
    });

    this.Then(/^he should be create the analysis$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
        See.if(LastResponse(),hasResponseCode(201))
        )
    });

    //@createMovements
    this.Given(/^that Engineer opens the creation movement form$/, function () {
        
    });

    this.When(/^he enters the movement information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Post.item({ cameraDirectory: "Camara_1", entryLine: [[0.18, 0.48], [0.54, 0.91]], exitLine: [[0.26, 0.42], [0.61, 0.86]], name: "Uno", snapshotIndex:0 }).on('/v1/analyses/'+analysis+'/movements'),
            Post.item({ cameraDirectory: "Camara_1", entryLine: [[0.26, 0.42], [0.61, 0.86]], exitLine: [[0.18, 0.48], [0.54, 0.91]], name: "Dos", snapshotIndex:0 }).on('/v1/analyses/'+analysis+'/movements')
        )
    });

    this.Then(/^he should be create the movement$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
        See.if(LastResponse(),hasResponseCode(201))
        )
    });

    //@editMovement
    this.Given(/^that Engineer opens the edit movement form$/, function () {
                
      });

    this.When(/^he changes the movement information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Put.item({ cameraDirectory: "Camara_1", entryLine: [[0.1, 0.1], [0.2, 0.2]], exitLine: [[0.3, 0.3], [0.4, 0.4]], name: "Mov Dos Modificado", snapshotIndex:0 }).on('/v1/analyses/'+analysis+'/movements/'+movemet)                            
        )
    });

    this.Then(/^he should save the movement with the new information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
            )            
    });

    //@deleteMovement    
    this.Given(/^that Engineer is in the movements page$/, function () {
        
      });

    this.When(/^he delete the movement$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Delete.resource('/v1/analyses/'+analysis+'/movements/'+movemet)
        )
    });

    this.Then(/^he should have one less movement$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
            )
    });

    //@proccessingAnalysis
    /*this.Given(/^that Engineer is in the movements page$/, function () {
        
    });*/

    this.When(/^he proccess the anaysis$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Patch.resource('/v1/analyses/'+analysis).with({ status: "IN_PROCESS" })
        )
    });

    this.Then(/^he should have the analysis in the in\-progress status$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
            )
    });

    //@succesfulCancellation
    this.Given(/^that Engineer opens the analysis query page$/, function () {
        
    });

    this.When(/^he cancels one analsys in the in\-proccess status$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Post.item({}).on('/v1/analyses/'+analysis+'/cancellations')
        )
    });

    this.Then(/^he should cancel the analysis$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(201))
            )
    });


    //@getAnalysis
    this.When(/^he get a analysis by id$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Post.item({ directory: "Video_1_Minuto", type: "SIMPLE_VOLUMES", name: "Aforote" }).on('/v1/analyses'),
            Get.resource('/v1/analyses/'+analysis)
        )
    });

    this.Then(/^he should get the analysis searched$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
            )
    });

    
    //@getAllAnalysis
    this.When(/^he get all analysis$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Get.resource('/v1/analyses?page=0&size=15')
        )
      });

    this.Then(/^he should get all the analysis in the system$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
        )
      });

    //@getAllTheMovementsByAnalysisId
    this.Given(/^that Engineer has a analysis with movements$/, function () {
        
    });

    this.When(/^he search all the movement by the analysis id$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Get.resource('/v1/analyses/'+analysis+'/movements')
        )
    });

    this.Then(/^he should see all the movements of the analsys$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
        )
    });

    //@checkMovementOfAnalysis
    this.Given(/^that Engineer has an analsys with movements$/, function () {
        
    });

    this.When(/^he want to check by the movement name$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Head.resource('/v1/analyses/'+analysis+'/movements?name=Uno')

        )
    });

    this.Then(/^he could know if the movements belongs to the analsys$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
        )
        
    });

    //@getAnalysisProgress
    this.Given(/^that Engineer has an analsys$/, function () {
        
    });

    this.When(/^he want to know the analysis progress$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Get.resource('/v1/analyses/'+analysis+'/progress')
        )
    });

    this.Then(/^he should see by Id analsys$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
        )
    });

    //@returnCameraDirectory
    this.Given(/^that Engineer has a directory with videos$/, function () {
        
    });

    this.When(/^he asks by the camera directory information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Get.resource('/v1/camera-directories?directory=Camara_1'),
        )
    });

    this.Then(/^he should receive the camera directory information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
        )
    });

    //@findDirectories
    this.Given(/^that Engineer has directories$/, function () {
        
    });

    this.When(/^he asks by the directories information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Get.resource('/v1/directories?directory=Video_1_Minuto')
        )
    });

    this.Then(/^he should receive the directories information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
        )
      });

    //@getASnapshot
    this.Given(/^that Engineer has videos$/, function () {
        
    });

    this.When(/^he asks by snapshot$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Get.resource('/v1/snapshots?directory=Camara_1&index=0')
        )
    });

    this.Then(/^he should receive a video image$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(LastResponse(),hasResponseCode(200))
        )
    });

    



}