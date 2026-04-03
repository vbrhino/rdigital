// Check how optional fields are handled

console.log("=== OPTIONAL FIELDS HANDLING ===\n");

console.log("Step 2 - Company field (optional):");
console.log("  HTML: <input id='company' ... /> (no 'required' attribute)");
console.log("  Validation (lines 438-443): Only checks 'name' and 'email'");
console.log("  Line 451-455: value saved to state.data.company");
console.log("  Result: User can leave empty and proceed ✓\n");

console.log("Step 5 - Details field (optional):");
console.log("  HTML: <textarea id='details' ... /> (no 'required' attribute)");
console.log("  Validation (lines 438-449): Doesn't specifically validate details");
console.log("  Line 451-455: value saved to state.data.details");
console.log("  Result: User SHOULD be able to leave empty and proceed");
console.log("  BUT: No button is visible to submit! ✗\n");

console.log("Radio button defaults:");
console.log("  contactMethod: Default value 'E-mail' in state (line 296)");
console.log("  urgency: Default value 'Deze maand' in state (line 297)");
console.log("  Validation (lines 445-449): Returns if no value selected");
console.log("\n  ISSUE: If user doesn't select a radio button:");
console.log("    - FormData.get() returns null");
console.log("    - Validation returns early (silently)");
console.log("    - User might not know why form isn't advancing");
console.log("  BUT: Radio buttons have default in state, so first option");
console.log("       could be pre-selected in HTML? Let me check...\n");

// Check HTML for checked attribute
console.log("Checking HTML for pre-selected radio buttons...");
console.log("  contactMethod: No 'checked' attribute found");
console.log("  urgency: No 'checked' attribute found");
console.log("\n  PROBLEM: State has defaults, but HTML doesn't reflect them!");
console.log("  User sees unselected radio buttons, but state has values.");
console.log("  User MUST click a radio button even though defaults exist.\n");
