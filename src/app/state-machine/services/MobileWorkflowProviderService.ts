import {WorkflowProviderService} from 'nova-workflow';
import {Observable} from 'rxjs/Observable';

export class MobileWorkflowProviderService extends WorkflowProviderService {
  workflow = {
    name: 'mobile',
    activities: [
      {
        name: 'start',
        type: 'FormActivity',
        form: {
          controls: [
            {
              type: 'paper-header',
              label: 'Personal Details',
              name: 'header'
            },
            {
              type: 'paper-input',
              label: 'Firstname',
              name: 'firstname',
              placeholder: 'Please enter your firstname'
            },
            {
              type: 'paper-input',
              label: 'Surname',
              name: 'surname',
              placeholder: 'Please enter your surname'
            },
            {
              type: 'paper-button',
              label: 'Select Hotel',
              name: 'select_hotel',
              style: 'btn btn-outline-info',
              nextActivity: 'select-hotel'
            }
          ]
        }
      },
      {
        name: 'select-hotel',
        type: 'FormActivity',
        form: {
          controls: [
            {
              type: 'paper-header',
              label: 'Hotel',
              name: 'header'
            },
            {
              type: 'paper-input',
              label: 'Hotel Name',
              name: 'hotel',
              placeholder: 'Please enter your hotel name'
            },
            {
              type: 'paper-input',
              label: 'Room Number',
              name: 'roomNumber',
              placeholder: 'Please enter your room number'
            },
            {
              type: 'paper-button',
              label: 'Personal Details',
              name: 'personal_details',
              style: 'btn btn-outline-danger',
              nextActivity: 'start'
            },
            {
              type: 'paper-button',
              label: 'Pay',
              name: 'make_payment',
              style: 'btn btn-outline-success',
              nextActivity: 'payment-confirmation'
            }
          ]
        }
      },
      {
        name: 'payment-confirmation',
        type: 'FormActivity',
        form: {
          controls: [
            {
              type: 'paper-header',
              label: 'Reservation Confirmation',
              name: 'header'
            },
            {
              type: 'paper-label',
              label: 'Welcome {{firstname}} {{surname}}, your reservation at the {{hotel}} is confirmed!!',
              name: 'confirmation'
            },
            {
              type: 'paper-input',
              label: 'Reply',
              name: 'reply',
              placeholder: 'Please enter your reply'
            },
            {
              type: 'paper-label',
              label: 'Your reply: {{reply}}',
              name: 'message-label'
            }
          ]
        }
      }
    ]
  };

  getWorkflow(name: string): Observable<any> {
    return Observable.create( (observer: any) =>  {
      const wf = JSON.parse(JSON.stringify(this.workflow));
      observer.next(wf);
    });
  }
}
