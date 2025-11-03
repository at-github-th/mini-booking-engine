# Mini Booking Engine

**Stack:** TypeScript (Express)  
**API:** http://127.0.0.1:5104  
**Web:** http://localhost:5504

## Run (local)

### API
cd mini-booking-engine-native/api && npm i && npm run dev

### Web (static tester)
cd mini-booking-engine-native/web && python3 -m http.server 5504

## Test
- **Ping:** curl -s http://127.0.0.1:5104 | jq .
- **Ping:** GET /\n- **Bookings:** GET /api/bookings

