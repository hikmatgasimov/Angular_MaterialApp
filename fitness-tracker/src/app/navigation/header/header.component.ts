import { Component, OnInit,EventEmitter,Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  @Output() sidenavToggle= new EventEmitter<void>();
  isAuth:boolean=false;
  authSubscription:Subscription;
  constructor(private authService:AuthService) { }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.authsChange.subscribe(authStatus=>{
       this.isAuth=authStatus;
    });
  }
  onToggleSidenav(){
   this.sidenavToggle.emit();
  }
  onLogout(){
    this.authService.logout();
  }
}
