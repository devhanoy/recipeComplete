export const RecipeStepList = (props) => (
    <div>
        <ol>
        {props.steps.map((s, index) =>
            <li key={index}>
                <textarea value={s} onChange={props.onchange(index)} />
            </li>)}
        </ol>
        <button onClick={props.add}>Ajouter Etape</button>
    </div>
)
