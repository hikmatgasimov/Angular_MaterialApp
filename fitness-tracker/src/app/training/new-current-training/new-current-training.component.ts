import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.module';
import { TrainingService } from '../training.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-current-training',
  templateUrl: './new-current-training.component.html',
  styleUrls: ['./new-current-training.component.css']
})
export class NewCurrentTrainingComponent implements OnInit {
  exercises:Observable<any>;
  //exercises:Observable<Exercise[]>;
  constructor(private trainingService:TrainingService,private db:AngularFirestore) { }

  ngOnInit(): void {
   //this.exercises=this.trainingService.getAvaliableExercises()
   this.exercises=this.db.collection('avaliableExercises').valueChanges();

  // this.exercises=this.db.collection('avaliableExercises').valueChanges();

  }
  onStartTraining(form:NgForm){
    this.trainingService.startExercise(form.value.exercise);
  }

}
