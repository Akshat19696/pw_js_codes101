#include<iostream>
using namespace std;
int main(){
  for(int  i=0;i<6;i++){
    for(int j=0;j<5;j++){
      if(i==0 || i==5){
        cout<<"*";
      }
      if(i!=0 && i!=5){
        if(j==0 || j==4){
          cout<<"*";
        }
        else{
          cout<<" ";
        }
      }
    }
    cout<<endl;
  }
  return 0;
}