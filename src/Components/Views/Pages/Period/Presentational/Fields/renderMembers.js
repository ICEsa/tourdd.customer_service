const renderMembers = ({ fields, }) => (
    <ul>
      {fields.map((member, index) =>
        <li key={index}>
          <Field
            name={`${member}.firstName`}
            type="text"
            component={renderField}
            label="First Name"/>
          <Field
            name={`${member}.lastName`}
            type="text"
            component={renderField}
            label="Last Name"/>
          <FieldArray name={`${member}.hobbies`} component={renderHobbies}/>
        </li>
      )}
    </ul>
  )