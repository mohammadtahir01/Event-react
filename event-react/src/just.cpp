#include<iostream>
using namespace  std;
int main(){
    int arr[] = {12,35,1,10,34,1};
    int n = sizeof(arr)/sizeof(arr[0]);
    int sec;
     for(int i=0; i<n; ++i){
        if(arr[i] > sec){
            int largest =sec;
            largest = arr[i];
        }else if(arr[i]>largest && arr[i] != largest){
            largest = arr[i];
        }
    }
    cout<<largest;
}
