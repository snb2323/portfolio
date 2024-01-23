import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";  // Assuming you're using React Router

function Form() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({ mode: 'onChange' });
    const navigate = useNavigate();

    // post
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:8000/user/signup`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                address: data.address,
                email: data.email,
            }),
        })
            .then(res => res.json())
            .then(() => {
                alert(`문의완료.`);
                navigate('../login');
            });
    };

    // error
    const onError = errors => console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="">
                <h1 className="formh d-flex mt-5 justify-content-center">상담문의</h1>
            </div>

            <fieldset>
                <div className="dda d-flex">
                    <div className="row">
                        <div>
                            <label className="col-3 m-10 0" htmlFor="name"></label>
                            <input className="mt-5 mb-4 0" id="name" type="name" placeholder="이름" {...register('name')} />
                        </div>
                        <div>
                            <label className="col-3" htmlFor="address"></label>
                            <input className=" mb-4 0" id="address" type="address" placeholder="주소" {...register('address')} />
                        </div>
                        <div>
                            <label className="col-3" htmlFor="email"></label>
                            <input className=" mb-4 0" id="email" type="email" placeholder="이메일" {...register('email')} />
                        </div>
                    </div>
                    <div className="">
                        <textarea name="" className="text col-lg-3  my-3  d-block  col-md-12" id="tx" cols="40" rows="6"
                            placeholder="
                        불편 사항이나 문의 사항 남겨주시면 
                         신속하고 친절하게 안내해 드리겠습니다."></textarea>
                    </div>
                </div>
                <div className="btns">
                    <button type="submit">문의하기</button>
                </div>
            </fieldset>
        </form>
    );
}

export default Form;
