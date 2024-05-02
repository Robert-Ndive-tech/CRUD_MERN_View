import React, { useState, useEffect } from 'react';
import Twilio from 'twilio-voice';
const CallApp = () => {
    const [accessToken, setAccessToken] = useState('');
    const [activeCall, setActiveCall] = useState(null);
    const [client, setClient] = useState(null);
   
    useEffect(() => {
       
       const client = Twilio.create({ logLevel: 'info' });
       setClient(client);
    }, [client]);

    useEffect(() => {
        if (client === null) {
           return;
        }
       
        client.on('connectionCreated', (connection) => {
           console.log('Connection created');
           setActiveCall(connection);
        });
       
        client.on('connectionDestroyed', () => {
           console.log('Connection destroyed');
           setActiveCall(null);
        });
       
        client.on('deviceReady', () => {
           console.log('Device is ready');
        });
       
        client.on('deviceError', (error) => {
           console.error('Device error', error);
        });
       

        return () => {
           client.destroy();
        };
       }, [client]);


   if (client !== null) {
         return;
       }
   
    // ... rest of the code
    const handleConnectCall = async () => {
        try {
           const token = await getAccessToken();
           setAccessToken(token);
       
           const connection = await client.connect({
             To: 'your_phone_number',
             AccessToken: token,
           });
       
           setActiveCall(connection);
        } catch (error) {
           console.error('Failed to connect call', error);
        }
       };
       
       const handleHangUpCall = () => {
        if (activeCall) {
           activeCall.disconnect();
           setActiveCall(null);
        }
       };
       
       const getAccessToken = async () => {
        // Implement the logic to get the access token from your server.
        // Replace the placeholder with your server API URL.
        const response = await fetch('your_server_api_url/token');
        const data = await response.json();
        return data.token;
       };
       return (
        <div className="App">
           <button onClick={handleConnectCall}>Connect Call</button>
           <button onClick={handleHangUpCall}>Hang Up Call</button>
        </div>
       );


   };

   export default CallApp;