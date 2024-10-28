<template>
  <tr>
    <td>{{ passenger._id }}</td>
    <td>{{ passenger.name }}</td>
    <td>{{ passenger.dob }}</td>
    <td>{{ passenger.address }}</td>
    <td>{{ passenger.phone }}</td>
    <td>{{ passenger.howMany }}</td>
    <td>{{ passenger.whereTo }}</td>
    <td>{{ passenger.bookingDate }}</td>
    <td>{{ passenger.checkinDate }}</td>
    <td>{{ passenger.checkoutDate }}</td>
    <td class="action-btn">
      <button class="edit-button" @click="$emit('editPassenger')">Edit</button>
      <button class="delete-button" @click="$emit('removePassenger')">Delete</button> 
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    passenger: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.edit-button,
.delete-button {
  padding: 8px 10px; 
  border: 1px solid #fff; 
  border-radius: 4px; 
  cursor: pointer; 
  font-size: 14px;
  background-color: #000;
}

.edit-button {
  color: white; /* White text color */
  margin-right: 10px; /* Space between buttons */
  padding: 8px 18px;
}

.edit-button:hover {
  background-color: #e0a800; /* Darker yellow on hover */
}

.delete-button {
  color: white; /* White text color */
}

.delete-button:hover {
  background-color: #c82333; /* Darker red on hover */
}
td.action-btn {
  padding: 1%;
}
td {
  padding: 1%;
}
</style>
  