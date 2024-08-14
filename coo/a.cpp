    #include<bits/stdc++.h>
    using namespace std;

    void solve(){
        int n;
        cin>>n;

        string s;
        s=to_string(n);

 
        for(int i=0;i<s.size()-2;i++){

            if(s[i]=='1' and s[i+1]=='0' and s[i+2]>'1' ){
                cout<<"YES\n";
                return;
            }

            else if(s[i]=='1' and s[i+1]=='0' and s[i+2]=='1' ){
                if(s[i+3]>='0'){
                    cout<<"YES\n";
                      return;
                }
                else{
                    cout<<"NO\n";
                      return;
                }
                
            }
           
        }
        
        
            cout<<"NO\n";
            return;
        
        
    }

    int main(){

        int t;
        cin>>t;
        
        while(t--){

            solve();
    
        }
        return 0;
    }