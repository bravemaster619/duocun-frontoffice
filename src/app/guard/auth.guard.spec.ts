import { TestBed, async, inject } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot()
      ],
      providers: [AuthGuard]
    });
  });

  it('should create an auth guard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
