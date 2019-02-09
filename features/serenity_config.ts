import {serenity} from '@serenity-js/core/lib';
import {serenityBDDReporter} from '@serenity-js/core/lib/reporting/serenity_bdd_reporter';

serenity.configure({
    crew: [
        serenityBDDReporter()
    ],
});
