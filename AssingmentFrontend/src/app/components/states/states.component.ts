import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/core/models/state.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  constructor(
    private stateService: StateService,
    private tostar:ToastrService
    ) { }

  ngOnInit(): void {
  }


  public saveStateDetails(state:State){
    this.stateService.saveState(state).subscribe({
      next:()=>{
        this.tostar.success('State saved Successfully');
      },
      error:(error)=>{
        this.tostar.error(JSON.stringify(error))
      },
      complete:()=>{
        window.location.reload();
      }
    })
  }
}



