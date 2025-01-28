function Hello( {person} ) {
  return (
    <div>
      <h1>{person.name} {person.message} {person.emoji} {person.seatNumbers}</h1>
    </div>
  );
}

export default Hello;