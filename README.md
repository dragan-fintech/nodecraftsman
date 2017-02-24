https://www.hackerrank.com/challenges/bear-and-steady-gene

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

void dist_char(char c, vector<long> &d) {
    if (c == 'A') {
        d[0]++;
    } else if (c == 'C') {
        d[1]++;
    } else if (c == 'G') {
        d[2]++;
    } else {
        d[3]++;
    }  
}

void find_letter_distribution(const string &s, vector<long> &dist)
{
    for (char c: s) {
        dist_char(c, dist);
    }
    
    long average = s.size() / 4;
    
    for (long &d: dist) {
        d = max(d-average, 0);
    }
}

void find_minimum_sub(const string &s, const vector<long> &dist) 
{
    vector<long> min_sub(4, 0);
    for (char c: s) {
        dist_char(c, min_sub);
        
        if (is_solution(min_sub, dist)) {
                
        }
    }    
}

int main() {
    long n;
    cin >> n;
    
    string s;
    cin >> s;
    
    vector<long> dist(4, 0);
    find_letter_distribution(s, dist);
    find_minimum_sub(s, dist);
    return 0;
}




# nodecraftsman
more advanced nodejs lessons


progress:

20170220: p46
20170217: p28