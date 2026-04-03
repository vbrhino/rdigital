// Simulating the showStep function logic

const steps = [
  { field: "name", id: "fieldName", type: "input" },           // index 0
  { field: "email", id: "fieldEmail", type: "input" },         // index 1
  { field: "company", id: "fieldCompany", type: "input" },     // index 2
  { field: "contactMethod", id: "fieldContactMethod", type: "choice" }, // index 3
  { field: "urgency", id: "fieldUrgency", type: "choice" },    // index 4
  { field: "details", id: "fieldDetails", type: "input" },     // index 5
];

console.log("=== ANALYZING showStep() FUNCTION ===\n");
console.log(`Steps array has ${steps.length} items (indices 0-${steps.length-1})\n`);

function analyzeStep(index) {
  console.log(`\n--- showStep(${index}) ---`);
  
  // Line 386-389: Show only the current step field
  console.log("Field visibility:");
  steps.forEach((step, currentIndex) => {
    const visible = currentIndex === index;
    console.log(`  ${step.id}: ${visible ? 'VISIBLE' : 'hidden'}`);
  });
  
  // Line 391: detailField visibility
  // toggle("hidden", index !== 5) means:
  //   if index !== 5, ADD "hidden" class → field is hidden
  //   if index === 5, REMOVE "hidden" class → field is visible
  const detailFieldHidden = index !== 5;
  console.log(`\nLine 391 - detailField.classList.toggle("hidden", index !== 5):`);
  console.log(`  index !== 5 = ${index !== 5}`);
  console.log(`  detailField: ${detailFieldHidden ? 'HIDDEN' : 'VISIBLE'}`);
  
  // Line 392: nextButton visibility
  // toggle("hidden", index === 5) means:
  //   if index === 5, ADD "hidden" class → button is hidden
  //   if index !== 5, REMOVE "hidden" class → button is visible
  const nextButtonHidden = index === 5;
  console.log(`\nLine 392 - nextButton.classList.toggle("hidden", index === 5):`);
  console.log(`  index === 5 = ${index === 5}`);
  console.log(`  nextButton: ${nextButtonHidden ? 'HIDDEN' : 'VISIBLE'}`);
  
  // Line 393: sendButton visibility
  // toggle("hidden", index !== 6) means:
  //   if index !== 6, ADD "hidden" class → button is hidden
  //   if index === 6, REMOVE "hidden" class → button is visible
  const sendButtonHidden = index !== 6;
  console.log(`\nLine 393 - sendButton.classList.toggle("hidden", index !== 6):`);
  console.log(`  index !== 6 = ${index !== 6}`);
  console.log(`  sendButton: ${sendButtonHidden ? 'HIDDEN' : 'VISIBLE'}`);
  
  // Summary
  console.log(`\n==> SUMMARY:`);
  console.log(`  Active field: ${index < steps.length ? steps[index].id : 'NONE (index out of bounds!)'}`);
  console.log(`  nextButton: ${nextButtonHidden ? 'HIDDEN' : 'VISIBLE'}`);
  console.log(`  sendButton: ${sendButtonHidden ? 'HIDDEN' : 'VISIBLE'}`);
  
  if (nextButtonHidden && sendButtonHidden) {
    console.log(`  ⚠️  WARNING: BOTH BUTTONS ARE HIDDEN!`);
  }
}

// Analyze steps 0-6
for (let i = 0; i <= 6; i++) {
  analyzeStep(i);
}

console.log("\n\n=== CRITICAL ISSUES FOUND ===\n");

console.log("ISSUE 1: At step 5 (details), nextButton gets HIDDEN");
console.log("  Line 392: nextButton.classList.toggle('hidden', index === 5)");
console.log("  When index = 5, this evaluates to toggle('hidden', true)");
console.log("  Result: nextButton is HIDDEN at step 5");
console.log("  BUT: User needs a way to submit the details field!\n");

console.log("ISSUE 2: The logic expects step index 6, but steps array only has 6 items (0-5)");
console.log("  Line 466 calls showStep(6) when state.step >= steps.length");
console.log("  But there is no step at index 6 in the steps array");
console.log("  The sendButton only becomes visible when index === 6\n");

console.log("ISSUE 3: detailField is handled specially but it's ALSO in the steps array");
console.log("  Steps array index 5: { field: 'details', id: 'fieldDetails' }");
console.log("  Line 391 also manages fieldDetails visibility");
console.log("  This creates duplicate/conflicting control\n");
