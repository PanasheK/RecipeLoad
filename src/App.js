import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsConfig from "./aws-config";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

Amplify.configure(awsConfig);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing App</h1>
        <button onClick={signOut}>Sign Out</button>
      </header>
      <main>
        <RecipeForm />
        <RecipeList />
      </main>
    </div>
  );
}

export default withAuthenticator(App);
