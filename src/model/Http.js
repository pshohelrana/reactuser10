export class Http{

      static async post(url,data) {
        try {
          const response = await fetch(url, {
            method: 'POST',        
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data).toString()
          });
          const result = await response.json();
         
          return result;
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async get(url) {
        try {
          const response = await fetch(url, {
            method: 'GET',            
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const result = await response.json();         
          
          return result;
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async delete(url,data) {
        try {
          const response = await fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data).toString()
          });
          const result = await response.json();
         
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async update(url,data) {
        try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/form-data'
            },
            body: new URLSearchParams(data).toString()
          });
          const result = await response.json();        
          return result;
        } catch (error) {
          console.error('Error:', error);
        }
      }

      static async find(url,id){
        try {
            const response = await fetch(url, {
                method:'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:new URLSearchParams({id:id}).toString()
            });
            const result = await response.json();        
            return result;
          } catch (error) {
            console.error('Error:', error);
          }
      }

}