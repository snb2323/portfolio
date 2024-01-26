import React from "react";
import { useForm } from "react-hook-form";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        alert(JSON.stringify(data))
        console.log(data);
    };


    return (
        <div className="sectionform">
            <form className="form " noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-12 d-md-flex justify-content-center ">
                    <h1 className="formh">상담문의</h1>
                </div>

                <fieldset>
                    <div className="dda d-flex container ">
                        <div className="user text-start ">
                            <div className="">
                                <div className="bor col-md-d-felx mt-5">
                                    <label className="" htmlFor="name">

                                    </label>
                                    <input
                                        className={`bor mt-5 mb-4 0 ${errors.name ? "invalid" : "valid"}`}
                                        id="name"
                                        type="text"
                                        placeholder="이름"
                                        {...register("name", { required: "이름은 필수 입력입니다." })}
                                    />
                                    {errors.name && <small>{errors.name.message}</small>}
                                    <div >
                                        <label className="" htmlFor="address">

                                        </label>
                                        <input
                                            className={` mb-4 0 ${errors.address ? "invalid" : "valid"}`}
                                            id="address"
                                            type="text"
                                            placeholder="주소"
                                            {...register("address", { required: "주소는 필수 입력입니다." })}
                                        />
                                        {errors.address && <small>{errors.address.message}</small>}
                                    </div>
                                    <div>
                                        <label className="" htmlFor="email">
                                        </label>
                                        <input
                                            className={`mb-4 0 ${errors.email ? "invalid" : "valid"}`}
                                            id="email"
                                            type="email"
                                            placeholder="test@email.com"
                                            {...register("email", {
                                                required: "이메일은 필수 입력입니다.",
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "이메일 형식에 맞지 않습니다.",
                                                },
                                            })}
                                            aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined
                                            }
                                            style={{ borderBottom: '1px solid white' }}
                                        />

                                        {errors.email && (
                                            <small role="alert" id="email-error">
                                                {errors.email.message}
                                            </small>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-5 col-sm-d-block">
                            <textarea
                                className="text  position-rel "
                                id="tx"
                                cols="30"
                                rows="3"
                                placeholder="불편 사항이나 문의 사항 남겨주시면 
                                신속하고 친절하게 안내해 드리겠습니다."
                                {...register("message")}
                            ></textarea>
                        </div>
                    </div>
                    <div className="btns mt-5">
                        <button type="submit" disabled={isSubmitting}>
                            문의하기
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;