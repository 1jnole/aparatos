import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
/**
 * Intercepts HTTP requests and adds global error handling and retry logic.
 */
@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor() {
    console.log('ErrorHandlingInterceptor');
  }



  /**
   * Intercepts an HTTP request and applies retry logic for specific error conditions.
   * @param request - The outgoing HTTP request to handle.
   * @param next - The next interceptor in the chain, or the final HTTP handler.
   * @returns An Observable that emits the final HTTP event, after applying retry logic.
   */
  intercept(
    request: HttpRequest<Observable<any>>,
    next: HttpHandler
  ): Observable<HttpEvent<Observable<any>>> {
    return next.handle(request).pipe(
      retry({
        count: 3,
        delay: (error, retryCount) => {
          if (error instanceof HttpErrorResponse && error.status === 500) {
            return timer(2000); // Delay of 2 second for retrying
          }
          return throwError(() => error); // No retry for other errors
        }
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  /**
   * Handles HTTP errors based on their status codes.
   * @param error - The encountered HttpErrorResponse.
   * @returns An Observable that emits the error, after processing it.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    //TODO: Add some toast notification service here
    console.log('handleError');
    alert('Error occurred while processing the request.')
    return throwError(() => error);
  }
}
