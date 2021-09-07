package com.readers.jikji.domain.test;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "member")
@Getter
@Setter
public class Member {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String name;

    public Member(){}

    public Member(String name){
        this.name = name;
    }
}

