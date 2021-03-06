let newForm = ` 
    <label class="label">Name</label>
<p class="control">
  <input class="input" type="text" placeholder="Text input" ng-model="img.name">
</p>


<label class="label">Image</label>
<p class="control has-icon has-icon-right">
  <input class="input is-success" type="text" placeholder="Text input" value="bulma" ng-model="img.url">
  <i class="fa fa-check"></i>
  <span class="help is-success">This username is available</span>
</p>

    <label class="label">Description</label>
<p class="control">
  <textarea class="textarea" placeholder="Textarea" ng-model="img.desc"></textarea> 
</p>


<p class="control">
  <button class="button is-primary">Submit</button>
  <button class="button is-link">Cancel</button>
</p>`;
export {newForm};