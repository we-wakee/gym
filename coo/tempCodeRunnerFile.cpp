    #include<bits/stdc++.h>
    using namespace std;

    int main(){

        int t;
        cin>>t;
        
        while(t--){

            int n;
            cin>>n;
            string s;
            int maxi=INT_MIN;
            int dot=-1;
            int totaldots=0;

            for(int i=0;i<n;i++){
                cin>>s[i];
            }

            for(int i=0;i<n;i++){
                if(s[i]=='.') {
                    maxi++;
                    totaldots++;
                    dot=max(dot,maxi);
                }
                else maxi=0;
            }

            if(dot>=3) cout<<"2\n";
            else cout<<totaldots<<endl;
    

            

        }
        return 0;
    }