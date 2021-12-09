package izm.sample.batch.testbatch.resources;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name="member")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemberEntity {

    @Id
    @Column(name = "user_id")
    private String user_id;
    @Column(name = "full_name")
    private String full_name;
    @Column(name = "password")
    private String password;
    @Column(name = "age")
    private Integer age;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    @Column(name="birth_day")
    private LocalDate birthday;
    @Column(name = "delete_flag")
    private boolean delete_flag;
}
