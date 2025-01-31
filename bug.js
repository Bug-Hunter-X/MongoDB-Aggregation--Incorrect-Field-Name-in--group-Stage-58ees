```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$fieldName", sum: {$sum: "$anotherField"}}}, // Incorrect field name
  {$sort: {sum: -1}}
]);
```